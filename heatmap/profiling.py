import pandas as pd
from pandas_profiling import ProfileReport
df = pd.read_csv("crime.csv")

design_report = ProfileReport(df)
design_report.to_file(output_file='report.html')