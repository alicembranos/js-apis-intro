import axios from "axios";
import $ from "jquery";

/**
 * 1. Get the list of posts from the following endpoint:
 *
 *    https://jsonplaceholder.typicode.com/posts?_limit=6
 *
 * Then once you have the data, for each post:
 *
 * 2. Create a `div` element with the class of `post` that
 *    has a `p` child element with the class of `post__title`
 *    and a text content with the value from the posts `title`
 *    property fetched form the api and another `p` element
 *    with the text content of the value from the posts `body`
 *    property.
 *
 * 3. Append each `post` div element as a child element
 *    of the `ex4-container` container element
 *
 * You should use the axios.get() method to fetch the data.
 *
 * @example
 * <div class="ex4-container">
 *   <div class="post">
 *     <p class="post__title">provident occaecati</p>
 *     <p>quia et suscipit</p>
 *   </div>
 *   <div class="post">
 *     <p class="post__title">iplsum slipsum</p>
 *     <p>etquia let prinspat</p>
 *   </div>
 * </div>
 */
function exercise04() {
  // Complete the code of the function
  // Make sure to return the axios.get() method call
  //
  // return axios.get()...
  return axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6").then(data => {

    data.data.forEach(item => {
      
      const container = document.querySelector(".ex4-container");
      const divElement = document.createElement("div");
      divElement.classList.add("post");
      const p1 = document.createElement("p");
      p1.classList.add("post__title");
      p1.textContent = item.title;
      const p2 = document.createElement("p");
      p2.textContent = item.body;
      divElement.append(p1);
      divElement.append(p2);

      container.append(divElement);
    });

    
  })
}

export default exercise04;