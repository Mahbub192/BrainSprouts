import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle("Blog")
  return (
    <div className="container mx-auto mt-10 h-[calc(100vh-200px)]">
      <h1 className="text-lg">
        <span className="fond-bold">Question -1</span> What is an access token
        and refresh token? How do they work and where should we store them on
        the client-side?
      </h1>
      <p>
        <span className="font-bold">Ans:-</span> An access token is a credential
        used to authenticate and authorize requests to access protected
        resources in a system. It is typically issued by an authentication
        server upon successful user authentication and has a limited lifespan.
        Refresh tokens, on the other hand, are used to obtain new access tokens
        without requiring the user to reauthenticate. They are long-lived tokens
        that are securely stored on the client-side. To store these tokens on
        the client-side, it is recommended to use secure storage mechanisms such
        as browser cookies with appropriate security settings or HTML5 web
        storage (localStorage or sessionStorage). It is crucial to ensure the
        tokens are protected against unauthorized access to prevent misuse or
        leakage of sensitive user information.
      </p>
      <br />
      <h1 className="text-lg">
        <span className="fond-bold">Question -2</span> Compare SQL and NoSQL
        databases?
      </h1>
      <p>
        <span className="font-bold">Ans:-</span>
        SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are
        two types of database management systems with different approaches to
        storing and retrieving data. <br />
        SQL databases are based on a structured schema, providing strong
        consistency and complex querying capabilities. NoSQL databases offer a
        flexible schema, scalability, and high performance, sacrificing some
        consistency. SQL is ideal for structured data and complex relationships,
        while NoSQL suits unstructured data, horizontal scalability, and agile
        development. Choice depends on specific requirements.
      </p>
      <br />
      <h1 className="text-lg">
        <span className="fond-bold">Question -3</span> What is express js? What
        is Nest JS?
      </h1>
      <p>
        <span className="font-bold">Ans:-</span>
        Express.js is a minimalistic and flexible web application framework for
        Node.js. It provides a set of robust features to build web applications
        and APIs, handling routes, middleware, and HTTP requests/responses
        efficiently. Nest.js is a progressive, TypeScript-based framework for
        building scalable and maintainable server-side applications. It utilizes
        modern JavaScript features and object-oriented programming principles.
        Nest.js offers a modular architecture, dependency injection, and a
        built-in support for creating APIs, microservices, and real-time
        applications. It aims to enhance productivity and maintainability while
        providing a solid foundation for large-scale projects.
      </p>
      <br />
      <h1 className="text-lg">
        <span className="fond-bold">Question -4</span> What is MongoDB aggregate
        and how does it work?
      </h1>
      <p>
        <span className="font-bold">Ans:-</span>
        MongoDB aggregate is a method that allows data processing and analysis
        in MongoDB. It works by chaining together multiple stages to form a
        pipeline, enabling operations like filtering, grouping, sorting, and
        performing calculations on the data to generate aggregated results.
      </p>
    </div>
  );
};

export default Blog;
