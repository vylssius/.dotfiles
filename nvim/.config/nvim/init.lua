-- bootstrap lazy.nvim, LazyVim and your plugins
require("config.lazy")
require("leap").add_default_mappings()
--local pywal = require("pywal")
--pywal.setup()

require("rose-pine").setup({
  transparency = true,
})

vim.cmd("colorscheme rose-pine")

function ColorMyPencils(color)
  color = color or "rose-pine"
  vim.cmd.colorscheme(color)

  vim.api.nvim_set_hl(0, "Normal", { bg = "none" })
  vim.api.nvim_set_hl(0, "NormalFloat", { bg = "none" })
end

ColorMyPencils()
