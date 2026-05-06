import pandas as pd
import json

file_path = r"C:\Users\user\Downloads\Curriculum Review Dasboard (1).xlsx"

try:
    # Read all sheets
    xls = pd.ExcelFile(file_path)
    sheet_names = xls.sheet_names
    print(f"Sheet names: {sheet_names}")

    data_summary = {}

    for sheet in sheet_names:
        df = pd.read_excel(xls, sheet_name=sheet)
        # Convert to a simple list of dicts for summary
        data_summary[sheet] = df.head(20).to_dict(orient='records')
        print(f"\n--- Sheet: {sheet} ---")
        print(df.head(10))

    # Save summary to a json for the AI to read
    with open("excel_summary.json", "w") as f:
        json.dump(data_summary, f, indent=4, default=str)

except Exception as e:
    print(f"Error: {e}")
