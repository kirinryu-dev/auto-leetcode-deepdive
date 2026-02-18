# create an image "auto-lab" with : 
docker build -t auto-lab .

# mont the container 
# for day-1
docker run -it --rm -v "${PWD}:/src/app" auto-lab node Day-1/index.js

# for day-2
docker run -it --rm -v "${PWD}:/src/app" auto-lab node Day-2/index.js

# for day-3
docker run -it --rm -v "${PWD}:/src/app" auto-lab node Day-3/index.js