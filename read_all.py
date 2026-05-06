import pandas as pd
import json

file_path = r"C:\Users\user\Downloads\Curriculum Review Dasboard (1).xlsx"

xls = pd.ExcelFile(file_path)
print("ALL SHEET NAMES:")
for s in xls.sheet_names:
    print(f"  - {s}")
print()

# Read every sheet fully - no row limit
for sheet in xls.sheet_names:
    df = pd.read_excel(xls, sheet_name=sheet, header=None)
    print(f"\n{'='*70}")
    print(f"SHEET: {sheet}  ({df.shape[0]} rows x {df.shape[1]} cols)")
    print('='*70)
    print(df.to_string())
    print()
