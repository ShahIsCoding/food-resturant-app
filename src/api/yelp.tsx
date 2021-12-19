import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer QcCyvGD9G_ObiJqzgaTv1hnihbVfGdEdfmup9QgbPbC-3MPI_66AiJCG8NNPVWzF_wHOGf8KLGIZxTQIh0XJAlBmBI9JkDpyDSGa5jtH21G9Rog2XWSKysQVvFi_YXYx'
    }
});

