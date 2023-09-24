import pandas as pd

# 1. Read the CSV into a DataFrame
df = pd.read_csv('cost-of-living-with-column-names.csv')

# Drop the columns that are non-numeric. In this case, let's say the non-numeric column is called 'City'.
# If there are more non-numeric columns, you can expand the list inside drop.
df_numeric = df.drop(columns=['city', 'Unnamed: 0'])  # Add other column names to the list if necessary

# 2. Group by the 'country' column and calculate the average for each country
df_avg = df_numeric.groupby('country').mean()

# 3. Reset the index to have a clean DataFrame
df_avg.reset_index(inplace=True)

# 4. Save the modified data to a new CSV file
df_avg.to_csv('averaged_data.csv', index=False)
