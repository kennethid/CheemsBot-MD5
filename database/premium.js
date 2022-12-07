const fs = require('fs')
  let _premiumOrg = JSON.parse(fs.readFileSync('./database/premium.json'))
  let premiumAwal = global.limitawal.premium
  
        const addPremium = (sender) => {
            let position = false
            Object.keys(_premiumOrg).forEach((i) => {
                if (_premiumOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _premiumOrg[position].limit
            }
        }     
        
module.exports = { addPremium }