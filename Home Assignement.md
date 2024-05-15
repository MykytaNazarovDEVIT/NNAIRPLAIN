# Task for React Assignee
---
## We want/expect
- Your goal is to showcase your problem-solving skills. You won’t be penalized for not completing every single point in this exercise.
- This is a take-home assignment, so there’s a trade-off between your time and the final result. Prioritize the aspects that effectively demonstrate your abilities; perfection is not expected.

## Requirements
- Create an app that displays a grid list of cities (each city is displayed as a square)
- Mock the data using the provided [data.json](data.json)

## We value
- **TypeScript**
- Almost **pixel-perfect** visual implementation
- Readability
- Reusability
- Documentation
- Testing

## Submission
Please upload your work to a private Github repository. and share it with:
- ben@sunfltd.com
- sahar@sunfltd.com

## Design
Here you can find only the Main view design [image.png](images/image.png) , [image2.png](images/image2.png)

### Main view
- Create a main page that displays a grid list of cities (each city is displayed as a square)
- Only display **active** cities to the user
- Implement a **search** functionality that allows the user to **filter** cities by name or country **using a single search field**
- Implement an option to choose how many cities do you want to see on the main page (5/10/20)
- Implement a filter functionality that allows the user to filter cities by continent
- Implement a **sorting** functionality that allows the user to sort cities by name or distance to Tel Aviv
- Allow the user to configure the temperature units to either international or imperial
- Each city square should display the following information: City name, Country name, Description, Background image

#### City details page (Weather)
- Allow the user to view the details of a selected city, including the weather status (temperature, weather status, etc.) and a forecast for the next few days
- The temperature data should be displayed in the selected units by the user
- Provide a back button that takes the user back to the main page. The applied filters should be preserved upon returning to the main page.

You can retrieve the weather data from `https://api.openweathermap.org/data/2.5/onecall?lon=[lon]&lat=[lat]&units=metric&appid=[api-key]` or any other data source of your choice.
