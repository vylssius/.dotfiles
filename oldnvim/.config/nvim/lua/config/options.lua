-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options hereby

vim.g.copilot_no_tab_map = true
vim.api.nvim_set_keymap("i", "<C-O>", 'copilot#Accept("<CR>")', { silent = true, expr = true })

vim.opt.termguicolors = true
