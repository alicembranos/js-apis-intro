import $ from "jquery";

import exercise01 from "../01-exercise";

describe("01-exercise", () => {
  const oldXMLHttpRequest = window.XMLHttpRequest;

  const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    onload: jest.fn(),
    onerror: jest.fn(),
    readyState: 4,
    response: JSON.stringify([
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat",
        body: "recusandae consequuntur",
      },
    ]),
  };

  beforeAll(() => {
    window.XMLHttpRequest = jest.fn(() => mockXHR);

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  afterAll(() => {
    window.XMLHttpRequest = oldXMLHttpRequest;

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  test("load the posts using XMLHttpRequest", () => {
    exercise01();

    expect(mockXHR.open).toHaveBeenCalledWith(
      "GET",
      "https://jsonplaceholder.typicode.com/posts?_limit=20"
    );

    expect(mockXHR.send).toHaveBeenCalled();

    mockXHR.onload();

    expect($("#data").text()).toMatch("userId");
  });
});
