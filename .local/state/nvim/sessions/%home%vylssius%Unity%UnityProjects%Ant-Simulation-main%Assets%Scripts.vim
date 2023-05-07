let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let OmniSharp_loglevel = "info"
let OmniSharp_translate_cygwin_wsl =  0 
let OmniSharp_prefer_global_sln =  0 
let OmniSharp_start_server =  1 
let OmniSharp_highlighting =  2 
let OmniSharp_completion_without_overloads =  0 
let OmniSharp_timeout =  1 
let OmniSharp_diagnostic_listen =  2 
let OmniSharp_server_use_net6 =  0 
let OmniSharp_sln_list_index =  -1 
let OmniSharp_server_stdio =  1 
let OmniSharp_start_without_solution =  1 
let OmniSharp_coc_snippet =  0 
let OmniSharp_autoselect_existing_sln =  0 
let OmniSharp_typeLookupInPreview =  0 
let OmniSharp_runtests_parallel =  1 
let OmniSharp_want_snippet =  0 
let OmniSharp_selector_ui = ""
let OmniSharp_server_display_loading =  1 
let OmniSharp_open_quickfix =  1 
let OmniSharp_runtests_echo_output =  1 
let OmniSharp_server_use_mono =  0 
let OmniSharp_lookup_metadata =  1 
let OmniSharp_server_loading_timeout =  180 
let OmniSharp_loaded =  1 
silent only
silent tabonly
cd ~/Unity/UnityProjects/Ant-Simulation-main/Assets/Scripts
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +0 FoodSource.cs
argglobal
%argdel
$argadd FoodSource.cs
edit FoodSource.cs
argglobal
let s:l = 6 - ((5 * winheight(0) + 30) / 60)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 6
normal! 0
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
