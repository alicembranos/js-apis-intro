import $ from "jquery";

import exercise02 from "../02-exercise";

describe("02-exercise", () => {
  beforeAll(() => {
    $.get = jest.fn().mockImplementationOnce(() =>
      Promise.resolve(
        JSON.stringify({
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        })
      )
    );

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  afterAll(() => {
    $.get.mockRestore();

    document.body.innerHTML = `<pre class="pre-container">
    <code id='data'>
    </code>
    </pre>`;
  });

  test("load the posts using jQuery.get()", () => {
    exercise02();

    expect($.get.mock.calls[0][0]).toBe(
      "https://jsonplaceholder.typicode.com/users/1/"
    );

    expect($.get.mock.calls[0][1]).toEqual(expect.any(Function));
  });
});
