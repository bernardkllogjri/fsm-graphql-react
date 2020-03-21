import { ApolloLink } from 'apollo-link';
import { setContext } from "apollo-link-context";

export default {
    auth: new ApolloLink((operation, forward) => {
        const token = localStorage.getItem('token');
         operation.setContext(({ headers = {} }) => ({
           headers: {
             ...headers,
             Authorization: token ? `Bearer ${token}` : "",
           }
         }));
         return forward(operation);
    }),
    fetchUrl: setContext((operation, { headers }) => {
        if(!localStorage.getItem('url')){
            fetch("https://api.staging.hellolending.com/open-api/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `{ getBackendApi { url }}`,
                }),
            }).then(response => {
                return response.json()
            }).then(response => {
                localStorage.setItem("url",response.data.getBackendApi.url);
                return headers
            })
        }
        return headers
    })
}