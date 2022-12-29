const { Order } = require('../database/models');
const status = require('../utils/StatusCode');

const orderMiddleware = async (req, res, next) => {
    const { orderNFId, orderPath, orderFileName, orderOriginalName } = req.body;
    console.log('teste');

    const orderNF = await Order.findOne({ where: { orderNFId } });
    if (orderNF) return res.status(status.UNAUTHORIZED).json({ message: 'OrderNFId já existe no banco de dados' });

    const path = await Order.findOne({ where: { orderPath } });
    if (path) return res.status(status.UNAUTHORIZED).json({ message: 'OrderPath já existe no banco de dados' });

    const orderFile = await Order.findOne({ where: { orderFileName } });
    if (orderFile) return res.status(status.UNAUTHORIZED).json({ message: 'OrderFileName já existe no banco de dados' });

    const orderOriginal = await Order.findOne({ where: { orderOriginalName } });
    if (orderOriginal) return res.status(status.UNAUTHORIZED).json({ message: 'orderOriginalName já existe no banco de dados' });

    next()
  };
  
  module.exports = orderMiddleware;