// function spring(response) {
//     response.write("spring");
// }
//
// function yang(response) {
//     response.write("yang");
// }
//
// module.exports.spring = spring;
// module.exports.yang = yang;

module.exports = {
    yang:  function yang(response) {
        response.write("yang");
    },
    spring: function spring(response) {
        response.write("spring");
    }
}