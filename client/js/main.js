const drivers = ['beyonce', 'bruno_mars', 'cardi_b', 'chicharito', 'daddy_yankee', 'drake', 'jcole', 'jennifer_lopez', 'kevin_hart', 'kyrie', 'lebron', 'madea', 'messi', 'migos', 'nikki', 'serena_williams', 'taylor_swift'];
const cars = ['bicycle', 'bugatti', 'clunker_car', 'dirt_bike', 'golf_cart', 'helicopter', 'lamborghini', 'lexus', 'pony', 'private_jet', 'scooter'];
const houses = ['boat_house', 'cali_mansion', 'cave', 'lake_house', 'light_house', 'log_cabin', 'miami_beach_house', 'tree_house'];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


const sendJson = (path, postData) => new Promise((resolve, reject) => {
  try {
    $.ajax({
      type: 'GET',
      url: path,
      success: (response) => {
        resolve(response);
      },
      error: (response) => {
        reject(response);
      }
    });
  } catch (err) {
    reject(err);
  }
});


$(document).ready(() => {

$('.shuffle_houses').click(() => {
  $('.houses_images').toggleClass('hide');
  $('.houses_images').html('');
  let s = '';
  shuffle(houses).forEach((house, index) => {
    const i = index + 1;
    const name = house.split('_').map(word => word.capitalize()).join(' ');
    const str = i + '. ' + name;
    s += '<div class="row"><div class="col-md-2 number">' + str + '</div><div class="col-md-4"><img src="./client/images/houses/' + house + '.jpg" class="img-thumbnail" height="300px" width="300px"></div></div>'
  });
  $('.houses_images').html(s);
})

$('.shuffle_cars').click(() => {
  $('.cars_images').toggleClass('hide');
  $('.cars_images').html('');
  let s = '';
  shuffle(cars).forEach((house, index) => {
    const i = index + 1;
    const name = house.split('_').map(word => word.capitalize()).join(' ');
    const str = i + '. ' + name;
    s += '<div class="row"><div class="col-md-2 number">' + str + '</div><div class="col-md-4"><img src="./client/images/cars/' + house + '.jpg" class="img-thumbnail" height="300px" width="300px"></div></div>'
  });
  $('.cars_images').html(s);
})

$('.shuffle_drivers').click(() => {
  $('.drivers_images').toggleClass('hide');
  $('.drivers_images').html('');
  let s = '';
  shuffle(drivers).forEach((house, index) => {
    const i = index + 1;
    const name = house.split('_').map(word => word.capitalize()).join(' ');
    const str = i + '. ' + name;
    s += '<div class="row"><div class="col-md-2 number">' + str + '</div><div class="col-md-4"><img src="./client/images/drivers/' + house + '.jpg" class="img-thumbnail" height="300px" width="300px"></div></div>'
  });
  $('.drivers_images').html(s);
})

});
