module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    foundation: {
      host: "127.0.0.1",
      port: 8547,   // Different than the default
      network_id: 1
    },
    ropsten: {
      host: "127.0.0.1",
      port: 8546,   // Different than the default
      network_id: 3
    },
    rinkeby: {
      host: "127.0.0.1",
      port: 8546,   // Different than the default
      network_id: 4
    }
  }
};
