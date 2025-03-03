const notFoundError = (res) => {
    return res
        .status(404)
        .send("este dado não foi encontrado no banco de dados");
};

module.exports = {
    notFoundError,
};
