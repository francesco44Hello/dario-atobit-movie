# Project Name

IMDB Movie Fetcher

## Description

IMDB Movie Fetcher is a web application that allows users to browse and search for movies using the IMDB API. The application provides three main features: upcoming movies, movies currently in theaters, and the ability to search for specific movies.

The project is built using React and utilizes Bootstrap components for a responsive and visually appealing user interface.

## Features

- Fetches upcoming movies: Displays a list of movies that will be released in the near future.
- Fetches in theaters movies: Shows a list of movies currently playing in theaters.
- Movie search: Enables users to search for specific movies by entering keywords.

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/francesco44Hello/dario-atobit-movie.git
   ```

2. Navigate to the project directory:

   ```bash
   cd IMDB-Movie-Fetcher
   ```

3. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Obtain an API key from the IMDB API by creating an account on the [IMDB API website](https://www.imdb.com/interfaces/).

5. Create a new file named `.env` in the root directory of the project and add the following line, replacing `YOUR_API_KEY` with your actual API key:

   ```bash
   REACT_APP_API_KEY=YOUR_API_KEY
   ```

6. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

7. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Upon opening the application, you will see the homepage with three tabs: "Upcoming Movies," "In Theaters," and "Search."
- Scroll on the "Upcoming Movies" tab to view a list of upcoming movies.
- Scrool on the "In Theaters" tab to see movies currently playing in theaters.
- Navigate to the "Search" tab and enter keywords to search for specific movies.
- Click on a movie card to view detailed information about the selected movie.

## Contributing

Contributions to this project are welcome. If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


## Acknowledgements

- The project uses the IMDB API to fetch movie data. Visit [IMDB API](https://www.imdb.com/interfaces/) for more information.
- Bootstrap is utilized for its components, providing a responsive and visually appealing user interface.
- Thanks to the React community for creating an amazing library and enabling the development of this project.
