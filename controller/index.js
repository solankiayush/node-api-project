module.exports = { 
  async sendDefaultResponse(req, res){
  res.status(200).send({response:'welcome to node api'});
}
};
