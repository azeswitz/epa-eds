set url=%elastic_search_url%

set load_type=drug
set index=fda

call http DELETE %url%/%index%/_query?q=_type:%load_type%



for %%i in (.\full_names_list.txt) do call gawk-w32 -f awk_lib.awk -f convert_to_json_names.awk %%i 



for %%i in (.\data*.json) do call http POST %url%/%index%/_bulk < %%i > results.txt

