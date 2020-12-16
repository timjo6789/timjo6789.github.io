select = query => document.querySelector(query);
selectAll = query => document.querySelectorAll(query);

setDisplayNone = query => selectAll(query).forEach(element => element.style.display = 'none');
setDisplayUnset = query => selectAll(query).forEach(element => element.style.display = 'unset');
setDisplayNoneUnset = (query, query1) => {setDisplayNone(query), setDisplayUnset(query1)};

toggleHidden = query => select(query).classList.toggle('hidden');
removeHidden = query => select(query).classList.remove('hidden');
addHidden = query => select(query).classList.add('hidden');