
const Invoice = require("../models/invoice")
const User = require("../models/user")
exports.makeInvoice = (req, res) => {
    const userId = req.body.storeId;
    const newInvoiace = new Invoice(req.body);
    newInvoiace.save((err, inv) => {
        if (err) {
            return res.status(400).json({
                error: "something went wrong"
            })
        }
        User.findByIdAndUpdate(userId,
            { $push: { invoices: inv._id } },
            (err, updatedUser) => {
                if (err) {
                    return res.status(400).json({
                        error: "unable to update user"
                    })
                }
                return res.status(200).json(inv)
            }
        )
    })

}