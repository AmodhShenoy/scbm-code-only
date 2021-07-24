import json

d = []

fname = "awards"
# href_file = "events"

# f = open("page_hrefs/" + href_file + ".txt", "r")
# s = f.read().split("\n\n")
# urls = {}
# for i in s:
#     if i.strip() != "":
#         url, text = i.strip().split("\n")
#         urls[text.strip()] = url.strip()

# print(urls)
# exit()
f = open("input.txt", "r")

sections = f.read().strip().split("\n\n")
for section in sections:
    lines = section.split("\n")
    title = lines[0][3:-2]
    l = []
    for line in lines[1:]:
        imgs = line.split()
        for img in imgs:
            if img.strip() != "":
                l.append(
                    {"path": "Awards/{}/{}".format(title.strip(), img.strip())}
                )
    d.append({
        'name':title.split('.',1)[1].strip().replace('_','"'),
        'images': l
    })

# lines = f.read().strip().split("\n\n")
# for i in range(1, len(lines) + 1):
#     line = lines[i - 1].strip()
#     if line != "":
#         for j in urls:
#             if j in line:
#                 line = line.replace(j, '<a href="{}">{}</a>'.format(urls[j], j))
#         # line = line.split("\n")
#         d.append({"id": i, "text": line.strip()})

# parts = f.read().strip().split("\n\n")
# for part in parts:
#     lines = part.split("\n")
#     dict = {"name": lines[0].strip()}
#     for i in lines[1:]:
#         field,text = i.split(":")
#         dict[field.strip().lower().replace(' ','-')] = text.strip()
#     d.append(dict)


# ppl = f.read().strip().split("\n\n")
# for i in range(1, len(ppl) + 1):
#     line = ppl[i - 1]
#     for j in urls:
#         if j in line:
#             line = line.replace(j, '<a href="{}">{}</a>'.format(urls[j], j))
#     data = line.split("\n")
#     d.append(
#         {
#             "id":i,
#             "name": data[0],
#             "minor-project": data[1].split(":")[1].strip(),
#             "status": data[2].split(":")[1].strip(),
#             # "status": data[3].split(":")[1].strip(),
#             # "location": data[4],
#         }
#     )


with open("media_json/" + fname + ".json", "w+") as fp:
    json.dump(d, fp, indent=4)
