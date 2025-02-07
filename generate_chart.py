import matplotlib.pyplot as plt
import os

# Read times from GitHub environment variables
cypress_time = int(os.getenv("CYPRESS_TIME", 0))
playwright_time = int(os.getenv("PLAYWRIGHT_TIME", 0))
selenium_time = int(os.getenv("SELENIUM_TIME", 0))

# Frameworks and their execution times
frameworks = ["Cypress", "Playwright", "Selenium"]
execution_times = [cypress_time, playwright_time, selenium_time]

# Create the bar chart
plt.figure(figsize=(8, 5))
plt.bar(frameworks, execution_times, color=["blue", "green", "red"])
plt.xlabel("Test Framework")
plt.ylabel("Execution Time (seconds)")
plt.title("Test Framework Execution Time Comparison")
plt.ylim(0, max(execution_times) + 5)

# Display values on top of bars
for i, v in enumerate(execution_times):
    plt.text(i, v + 0.2, str(v), ha='center', fontsize=12)

# Save the chart as a PNG file
plt.savefig("execution_time_chart.png")
print("Execution time chart saved as execution_time_chart.png")
