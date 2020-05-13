import $ from "jquery";
import axios from "axios";

jest.mock("axios");

import exercise04 from "../04-exercise";

describe("04-exercise", () => {
  let data = {
    data: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident",
        body: "quia et recusandae consequuntur",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore",
      },
    ],
  };

  beforeAll(() => {
    document.body.innerHTML = `<section class="col">
    <pre class="pre-container">
<code id='data'>
</code>
</pre>
    <div class="ex4-container"></div>
  </section>`;
  });

  afterAll(() => {
    document.body.innerHTML = `<section class="col">
    <pre class="pre-container">
<code id='data'>
</code>
</pre>
    <div class="ex4-container"></div>
  </section>`;
  });

  test("use axios to load the posts", (done) => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    exercise04().then(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts?_limit=6"
      );

      expect($(".ex4-container").children()).toHaveLength(2);

      done();
    });
  });
});
