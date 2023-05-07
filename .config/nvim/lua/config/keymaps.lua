-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here

vim.keymap.set("n", "<leader>pv", vim.cmd.Ex)

--bind leader vo to open the vimux runner
vim.keymap.set("n", "<leader>vo", vim.cmd.VimuxOpenRunner)

--bind leader vc to close the vimux runner
vim.keymap.set("n", "<leader>vc", vim.cmd.VimuxCloseRunner)

--bind leader vr to run cargo run in the vimux runner
vim.keymap.set("n", "<leader>vr", vim.cmd.VimuxPromptCommand)

--rebind ZZ to :wqa
vim.keymap.set("n", "ZZ", ":wqa<CR>")

--rebind ZQ to :qa!
vim.keymap.set("n", "ZQ", ":qa!<CR>")
