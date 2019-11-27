UPDATE art_list
SET title = $2, description = $3, size = $4, price = $5, imageurl = $6
WHERE id = $1