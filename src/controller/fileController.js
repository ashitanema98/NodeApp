
function handleFileUpload(req, res) {
    if (!req.file) {
        // No file was attached
        return res.status(400).send('No file was attached.');
      }
  
    res.status(200).send('File uploaded successfully');
  }
  
  module.exports = {
    handleFileUpload,
  };


