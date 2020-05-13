import $ from "jquery";

import exercise03 from "../03-exercise";

describe("03-exercise", () => {
  let resp = JSON.stringify([
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim",
    },
  ]);

  beforeAll(() => {
    fetch.resetMocks();

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  afterAll(() => {
    fetch.resetMocks();

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  test("use fetch to load the comments", (done) => {
    fetch.mockResponseOnce(resp);

    exercise03().then(() => {
      expect(fetch).toHaveBeenCalledWith(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );

      expect($("#data").text()).toMatch("postId");

      done();
    });
  });
});
