local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
	vim.fn.system({
		"git",
		"clone",
		"--filter=blob:none",
		"https://github.com/folke/lazy.nvim.git",
		"--branch=stable", -- latest stable release
		lazypath,
	})
end
vim.opt.rtp:prepend(lazypath)

vim.g.mapleader = " "

require("lazy").setup({
	"folke/which-key.nvim",
	"folke/neodev.nvim",
	'nvim-treesitter/nvim-treesitter',
	'nvim-treesitter/playground',
	'mbbill/undotree',
	'tpope/vim-fugitive',
	'mfussenegger/nvim-jdtls',
	'ggandor/leap.nvim',
    'preservim/vimux',
    { 'nvim-lua/plenary.nvim', name = "plenary" },
	{ 'rose-pine/neovim', name = 'rose-pine' },
	{ "folke/neoconf.nvim", cmd = "Neoconf" },

	{
		"ThePrimeagen/harpoon",
		branch = "harpoon2",
		dependencies = { { 'nvim-lua/plenary.nvim' } }
	},

	{
		'nvim-telescope/telescope.nvim',
		dependencies = { { 'nvim-lua/plenary.nvim' } }
	},

	{'williamboman/mason.nvim'},
	{'williamboman/mason-lspconfig.nvim'},
	{'VonHeikemen/lsp-zero.nvim', branch = 'v3.x'},
	{'neovim/nvim-lspconfig'},
	{'hrsh7th/cmp-nvim-lsp'},
	{'hrsh7th/nvim-cmp'},
	{'L3MON4D3/LuaSnip'},
	{'hrsh7th/cmp-nvim-lua'},
	{'hrsh7th/cmp-buffer'},
	{'hrsh7th/cmp-path'},
	{'saadparwaiz1/cmp_luasnip'},
	{'rafamadriz/friendly-snippets'},
})

require("config.keymaps")
require("config.options")
require("config.plugins")

function ColorMyPencils(color)
	color = color
	vim.cmd.colorscheme(color)
    vim.cmd("highlight! Pmenu guibg=#000000,guifg=#FFFFFF")

	vim.api.nvim_set_hl(0, "Normal", { bg = "none" })
	vim.api.nvim_set_hl(0, "NormalFloat", { bg = "none" })
end

ColorMyPencils()

require("leap").add_default_mappings()

