# Tinybird Data Dashboard

This is a small web application that retrieves and displays data from a remote API. The application provides a simple widget to visualize different types of data (e.g., integers, strings, and dates). The dashboard also includes filtering options to change the information displayed. Users can share the state of the widget with filters applied using deep linking.

## Features

- **Data Visualization Widget**: Displays data using appropriate visual elements depending on the data type (e.g., charts for numeric data or dates).
- **Data Filtering**: Allows users to filter the data with a selector control.
- **Deep Linking**: Users can share specific filtered views by copying the URL, and the dashboard will load the correct state.
- **Testing**: Includes basic tests for key functionalities using Jest.

## Technologies

- **Vanilla JavaScript** 
- **Chart.js** for rendering charts
- **Webpack** for bundling
- **Jest** for testing

## Setup and Installation

Follow these instructions to run the dashboard locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed (version 14+ recommended)
- [npm](https://www.npmjs.com/get-npm) installed

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/aguher/tinybird.git
    cd data-dashboard
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm run start
    ```

4. **Build the project for production**:

    ```bash
    npm run build
    ```

5. **Run tests**:

    ```bash
    npm run test
    ```

6. **Open the application**:

   Once the development server starts, open your browser and go to:

   ```bash
   http://localhost:9000


### Decisions

First, I have been reviewing the API provided. At first, I noticed that it gave error because of the size of the query, but after reading the documentation, I found that you can limit queries using query parameters.

Secondly, I looked at the data returned by the API, and verified that metadata (with the information of the data sent) was sent on the one hand, and on the other hand, the information of each data. 

After investigating the API, the next thing to do was to check how many elements we should divide the application into. In our case, we are asked for a component that allows to filter by the different metadata, I chose a selector, so that in this way, only one data at the same time will be represented, in case we needed more than one value, we could have chosen another component, like a multiple selector.

I checked the different data types returned by the API, and decided that there were 3 different types (int, date and string).
Since to represent data in a chart, we need it to be numerical, the string data type would be discarded and we would use the Chart for the Int and Date (which is passed to getTime to get the date in number) only.
For the String case, I decided to use a table in which the values are shown in a single column. 

For the organization of the code, I divided it into different sections:

#### Displays
Where we represent the initialization of the Chart, and the rendering of both the Chart and the table.

#### Fetching
In charge of managing the API call, I have added a couple of parameters for possible pagination, if necessary for a next version.

#### Filter
It is in charge of the insertion of the different targets in the HTML Selector, as well as updating the URL to share the data.