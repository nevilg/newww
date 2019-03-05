# !/bin/bash
# update_readings.sh
# Calls Airtable API to update the readings section 

echo "Activating virtualenv..."
source venv/bin/activate

echo "Calling Airtable API to download new readings..."
python scripts/download_readings.py scripts/secrets.json

echo "Copying readings to app/content/readings.json directory..."
cp scripts/output.json app/content/readings.json

deactivate
