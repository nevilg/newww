# download_readings.py
# Downloads all records from "Nevil's Life: Nevil's Readings" and transforms
# it into the format of the readings.json file.

"""
Usage:
python download_scripts.py <secrets_json_filepath>
eg. python download_scripts.py secrets.json
"""

import json
import pprint
import requests
import sys

class AirtableDownloader(object):

	GET_RECORDS_URL_FORMAT = "https://api.airtable.com/v0/{app_id}/{table_name}?maxRecords={num_records}&view=Grid%20view"
	HEADERS = {
		"Authorization": "Bearer {api_token}"
	}

	# Describe what fields in the Airtable table should map to in the required format.
	FIELD_FORMAT_MAP = {
		"Name": "title",
		"Author": "author",
		"Notes": "description",
		"Link": "link",
		"Date": "date"
	}

	def __init__(self,
				 api_token,
				 app_id,
				 table_name):
		self.api_token = api_token
		self.app_id = app_id
		self.table_name = table_name

	# Public functions exposed in API
	def get_records(self, num_records):
		"""Download records from table. Limit to num_records."""
		def _generate_url(app_id, table_name, num_records):
			"""Generate a url to get all records."""
			return self.GET_RECORDS_URL_FORMAT.format(
				app_id=app_id,
				table_name=table_name,
				num_records=num_records
			)

		url = _generate_url(self.app_id, self.table_name, num_records)
		headers = self._generate_headers()
		print "Querying Airtable..."
		response = requests.get(url, headers=headers)
		if response.status_code not in (200, 201) or not response.content:
			raise Exception("Invalid response from server!")

		content = json.loads(response.content)
		print "Formatting records..."
		formatted_records = self._format_records(content['records'])

		return formatted_records
	
	def write_to_file(self, records, output_filename):
		"""Writes the given records to a file indicated by output_filename."""
		print "Writing to file: {}".format(output_filename)
		with open(output_filename, 'w') as f:
			# Write well-formatted output to file
			json.dump(records, f, indent=4)

	# Private functions (function names start with _)
	def _generate_headers(self):
		"""Creates headers required for all requests."""
		headers = dict(self.HEADERS)
		headers["Authorization"] = headers["Authorization"].format(api_token=self.api_token)
		return headers

	def _format_records(self, records):
		"""
		Format the given records (Python list) into a Python list with the required format.
		Required fields are described above.
		"""
		formatted_records = []
		for record in records:
			formatted_record = {}
			for key, val in self.FIELD_FORMAT_MAP.iteritems():
				# key refers to the name of the field in the Airtable airtable
				# val refers to the name of the field in the output

				if key in record.get("fields"):
					formatted_record[val] = record.get('fields').get(key)

			formatted_records.append(formatted_record)

		return formatted_records
	

def main():
	# Parse secrets.json file
	secrets_filepath = sys.argv[1]
	with open(secrets_filepath, "r") as f:
		secrets = json.load(f)

	num_records = secrets["num_records"]
	output_filename = secrets["output_filename"]
	downloader = AirtableDownloader(secrets["api_token"], secrets["app_id"], secrets["table_name"])
	records = downloader.get_records(num_records)
	records.reverse() # reverse order for newest records to be listed first
	downloader.write_to_file(records, output_filename)


if __name__ == '__main__':
	main()
