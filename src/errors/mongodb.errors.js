const notFoundError = (res) => {
    return res
        .status(404)
        .send("este dado não foi encontrado no banco de dados");
};

const objectIdCastError = (res) => {
    return res
        .status(500)
        .send("ocorreu um erro ao recuperar este dado no banco de dados");
};
module.exports = {
    notFoundError,
    objectIdCastError,
};
