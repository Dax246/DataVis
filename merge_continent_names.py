import pandas as pd

# Load data from the first CSV file
df1 = pd.read_csv('COVID_19_10_Oct_2020.csv')

# Load data from the second CSV file
df2 = pd.read_csv('country_cost_of_living.csv')

# Merge the two DataFrames based on the 'Country' column
merged_df = df2.merge(df1[['Country', 'Continent']], on='Country', how='left')

# Save the merged DataFrame to a new CSV file
merged_df.to_csv('merged_file.csv', index=False)
