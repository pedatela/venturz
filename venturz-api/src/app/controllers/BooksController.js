const Book = require('../models/Book');


class BooksController {

  async index(req, res) {
    const shops = await Book.findAll({ where: { shop_id: req.params.shop_id }, order: [['id', 'ASC']] });
    res.json({ data: shops })
  }

  async create(req, res) {
    let fileDataBase64 = null;
    if (req.file) {
      fileDataBase64 = Buffer.from(req.file.buffer).toString('base64')
    }

    const bookExist = await Book.findOne({ where: { name: req.body.name, shop_id: req.body.shop_id } })
    if (bookExist) {
      return res.status(400).json({ type: 'error', msg: 'Book already exist' })
    }
    console.log({ ...req.body, image: fileDataBase64 })
    const book = await Book.create({ ...req.body, image: fileDataBase64 })
    return res.status(201).json({ type: 'success', data: book, msg: 'Book successfuly created' })
  }

  async update(req, res) {
    const bookExist = await Book.findByPk(req.params.id)
    if (!bookExist) {
      return res.status(404).json({ type: 'error', msg: 'Book does not exist' })
    }
    const bookUpdated = await bookExist.update(req.body)
    return res.json({ type: 'success', data: bookUpdated, msg: 'Book successfuly updated' })
  }

  async delete(req, res) {
    const bookExist = await Book.findByPk(req.params.id)
    if (!bookExist) {
      return res.status(404).json({ type: 'error', msg: 'Book does not exist' })
    }
    await bookExist.destroy()
    res.json({ type: 'success', msg: 'Book successfuly deleted' })
  }

  async show(req, res) {
    const book = await Book.findByPk(req.params.id);
    res.json({ data: book })
  }

}

module.exports = new BooksController()