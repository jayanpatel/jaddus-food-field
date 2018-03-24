import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../menu-page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  indianCurries1 = [
    new MenuItem('1', 'Aloo Aap Ki Pasand'),
    new MenuItem('2', 'Bharwan Seekh Masala'),
    new MenuItem('3', 'Chana Masala'),
    new MenuItem('4', 'Cheese Angoori'),
	new MenuItem('5', 'Cheese Butter Masala'),
	new MenuItem('6', 'Corn Capsicum Masala'),
	new MenuItem('7', 'Corn Tomato Bharta'),
	new MenuItem('8', "Jaddu's FF Special"),
	new MenuItem('9', 'Kaju Butter Masala'),
	new MenuItem('10', 'Kaju Curry'),
	new MenuItem('11', 'Kandhari Kofta'),
	new MenuItem('12', 'Khoya Kaju'),
	new MenuItem('13', 'Makhanwala'),
	new MenuItem('14', 'Malai Kofta')
  ];

  indianCurries2 = [
    new MenuItem('15', 'Methi Mutter Malai'),
	new MenuItem('16', 'Nargisi Kofta'),
	new MenuItem('17', 'Navratan Korma'),
	new MenuItem('18', 'Palak Paneer'),
	new MenuItem('19', 'Paneer Achariya'),
	new MenuItem('20', 'Paneer Amritsari'),
	new MenuItem('21', 'Paneer Angara'),
	new MenuItem('22', 'Paneer Bhurjee Butter Masala'),
	new MenuItem('23', 'Paneer Bjurjee'),
    new MenuItem('24', 'Paneer Butter Masala'),
    new MenuItem('25', 'Paneer Chutney'),
    new MenuItem('26', 'Paneer Darbari'),
    new MenuItem('27', 'Paneer Handi'),
	new MenuItem('28', 'Paneer Jwalamukhi')
  ];

  indianCurries3 = [
    new MenuItem('29', 'Paneer Kadai'),
	new MenuItem('30', 'Paneer Lababdar'),
	new MenuItem('31', 'Paneer Lazeez'),
	new MenuItem('32', 'Paneer Mirch Masala'),
	new MenuItem('33', 'Paneer Pasanda'),
	new MenuItem('34', 'Paneer Patiyala'),
	new MenuItem('35', 'Paneer Tikka Masala'),
	new MenuItem('36', 'Paneer Toofani'),
	new MenuItem('37', 'Rajwadi Kofta'),
	new MenuItem('38', 'Shaan-3-Paneer'),
	new MenuItem('39', 'Stuffed Tomato/Stuffed Capsicum'),
	new MenuItem('40', 'Veg. Jwalamukhi'),
	new MenuItem('41', 'Veg. Angara'),
	new MenuItem('42', 'Veg. Diwani Handi')
  ];

  indianCurries4 = [
  	new MenuItem('43', 'Veg. Green Tawa Masala'),
	new MenuItem('44', 'Veg. Hyderabadi'),
	new MenuItem('45', 'Veg. Jaipuri'),
	new MenuItem('46', 'Veg. Jalfrezi'),
	new MenuItem('47', 'Veg. Kadai'),
	new MenuItem('48', 'Veg. Khada Masala'),
	new MenuItem('49', 'Veg. Khazana'),
	new MenuItem('50', 'Veg. Khyber Tawa Masala'),
	new MenuItem('51', 'Veg. Kolhapuri'),
	new MenuItem('52', 'Veg. Makhanwala'),
	new MenuItem('53', 'Veg. Mehfit'),
    new MenuItem('54', 'Veg. Remix'),
    new MenuItem('55', 'Veg. Seekh Kabab Masala'),
    new MenuItem('56', 'Veg. Tawa Masala')
  ];

  indianDal1 = [
    new MenuItem('1', 'Dal Fried'),
    new MenuItem('2', 'Dal Kolhapuri'),
    new MenuItem('3', 'Dal Makhani'),
    new MenuItem('4', 'Dal Palak'),
    new MenuItem('5', 'Dal Tadka'),
    new MenuItem('6', 'Dhaba Dal'),
    new MenuItem('7', 'Punjabi Kadhi')
  ];

  indianDal2 = [
   new MenuItem('8', 'Curd Rice'),
   new MenuItem('9', 'Dal Masala Khichdi'),
   new MenuItem('10', 'Green Peas Pulav'),
   new MenuItem('11', 'Hyderabadi Biryani'),
   new MenuItem('12', 'Jeera Rice'),
   new MenuItem('13', 'JFF Kathiyawadi Khichdi'),
   new MenuItem('14', 'Kabuli Khichdi'),
   new MenuItem('15', 'Masala Rice'),
   new MenuItem('16', 'Steamed Rice'),
   new MenuItem('17', 'Veg. Biryani'),
   new MenuItem('18', 'Veg. Masala Pulav'),
   new MenuItem('19', 'Veg. Pulav')
  ];

  indianBread1 = [
  	new MenuItem('', 'Assorted Basket'),
  	new MenuItem('', 'Cheese Chilli Naan'),
  	new MenuItem('', 'Kashmiri Naan'),
  	new MenuItem('(Onion/Pudina/Masala)', 'Kulcha'),
  	new MenuItem('(Cheese/Mexican/Garlic/Hariyali)', 'Naan'),
  	new MenuItem('(Plain/Butter)', 'Naan'),
  	new MenuItem('(Plain/Butter)', 'Paratha'),
  	new MenuItem('(Plain/Butter)', 'Roti'),
  	new MenuItem('(Aloo/Gobi/Paneer/Cheese/Corn)', 'Stuffed Paratha')
  ];

  mexican1 = [
    new MenuItem('(Refried Beans Stuffed in Tortilla & Baked)', 'Cheese & Beans Enchiladas'),
    new MenuItem('(Crispy Fried Tortilla stuffed With Beans, Served with Mexican Sauce & Topped With Cheese)', 'Chimichangas'),
    new MenuItem('', 'Mexican Fried Rice'),
    new MenuItem('', 'Mexican Platter'),
    new MenuItem('(Tortilla, Stuffed with Corn & Paneer With Spiced & Baked)', 'Paneer and Corn Enchiladas'),
    new MenuItem('(Tortilla Filled with Corn paneer, beans, capsicum and tomatoes and topped with cheese)', 'Quesadillas')
  ];

  thai1 = [
  	new MenuItem('', 'Green Curry'),
  	new MenuItem('', 'Red Curry'),
  	new MenuItem('', 'Santomin Noodles'),
  	new MenuItem('', 'Thai Red Curry Noodles')
  ];

  chinese1 = [
    new MenuItem('', 'Chinese Bhel'),
    new MenuItem('', 'Hungama Noodles'),
    new MenuItem('', 'Mushroom Chilli Garlic Noodles'),
    new MenuItem('(Gravy)', 'Paneer Chilli'),
    new MenuItem('', 'Triple Schezwan Fried Rice'),
    new MenuItem('', 'Veg. American Chopsuey'),
    new MenuItem('', 'Veg. Ball in Hot Garlic Sauce'),
    new MenuItem('', 'Veg. Chow-Chow'),
  ];

  chinese2 = [
    new MenuItem('', 'Veg. Chowmein'),
    new MenuItem('', 'Veg. Combination Fried Rice'),
    new MenuItem('', 'Veg. Fried Rice'),
    new MenuItem('', 'Veg. Hakka Noodles'),
    new MenuItem('(Gravy)', 'Veg. Manchurian'),
    new MenuItem('', 'Veg. Schezwan Fried Rice'),
    new MenuItem('', 'Veg. Schezwan Noodles'),
    new MenuItem('', 'Veg. Sweet & Sour Balls'),
  ];

  pasta1 = [
    new MenuItem('', 'Alfredo Origin'),
  	new MenuItem('', 'All In One Pasta'),
  	new MenuItem('', 'Pasta In Pasta'),
  	new MenuItem('', 'Pasta Paper Chino'),
  ];

  pasta2 = [
    new MenuItem('', 'Penne Pesto'),
  	new MenuItem('', 'Sizzling Pasta'),
  	new MenuItem('', 'Spaghetti Alla Napoleon'),
  	new MenuItem('', 'Spaghetti Arrabiata'),
  ];

  pizza1 = [
    new MenuItem('(Corn & Onion)', 'American Pizza'),
  	new MenuItem('', 'Classic Veg.'),
  	new MenuItem('(Black, Olives, Capsicum, Cheese, Onion, & Tomato)', 'Greek Pizza'),
    new MenuItem('(Capsicum, Tomato, & Pineapple)', 'Hawaiian Garten'),
    new MenuItem('', 'Italian Pizza'),
  ];

  pizza2 = [
  	new MenuItem('(Tomato, Corn, & Capsicum)', 'Jain Pizza'),
  	new MenuItem('', 'Margherita'),
  	new MenuItem('', 'Mexican'),
  	new MenuItem('(Cheese | American Corn | Olive | Mushroom | Paneer | Beans | Pineapple)', 'Extra Toppings'),
  ];

  baked1 = [
    new MenuItem('(Red Sauce | White Sauce)', 'Baked Spaghetti With Vegetables'),
  	new MenuItem('', 'Baked Vegetables'),
  	new MenuItem('With (Pineapple | Corn | Macaroni) Toppings', 'Baked Vegetables'),
  ];

  baked2 = [
    new MenuItem('', 'Cheesy Lasagna'),
  	new MenuItem('', 'Italian Florentine'),
  	new MenuItem('', 'Veg. Florentine'),
  ];

  burger1 = [
    new MenuItem('(Cabbage, Carrot, Capsicum, Chilly Flakes, Black Pepper, Cheese Slice, & Fresh Cream)', 'Cheese Burger'),
  	new MenuItem('(Carrot, Cucumber, Pineapple, Cheese slice, & Fresh Cream)', 'Russian Burger'),
  ];

  sandwich1 = [
    new MenuItem('', 'Bread Butter'),
  	new MenuItem('', 'Bread Butter Jam'),
  	new MenuItem('', 'Cheese Butter Garlic Toasties'),
  	new MenuItem('', 'Cheese Chilly Toast'),
  	new MenuItem('', 'Cheese Grilled Sandwich'),
  	new MenuItem('', 'Cheese Sandwich'),
  	new MenuItem('(Spring Pasta, Onion, Capsicum, & Spice)', 'Italian Sandwich'),
  ];

  sandwich2 = [
    new MenuItem('', 'Masala Grilled Sandwich'),
  	new MenuItem('(Mexican Beans, Capsicum, & Cheese)', 'Mexican Grilled Sandwich'),
  	new MenuItem('(Tomato, Cucumber Pineapple, & Russian Salad With Cheese)', 'Russian Club Sandwich'),
  	new MenuItem('"Grilled | Non Grilled"  With (Carrot, Cucumber, Cocktail Fruit, & Fresh Cream With Cheese)', 'Russian Sandwich'),
  	new MenuItem('', 'Veg. Club Sandwich'),
  	new MenuItem('', 'Veg. Grilled Sandwich'),
  	new MenuItem('', 'Veg. Sandwich'),
  ];

  salad1 = [
    new MenuItem('', 'American Corn'),
  	new MenuItem('', 'Fresh Fruits Salad'),
  	new MenuItem('', 'Fresh Green'),
  	new MenuItem('', 'Italian Tossed'),
  ];

  salad2 = [
    new MenuItem('', 'Mexican Salad'),
  	new MenuItem('', 'Pasta Salad With Cheese'),
  	new MenuItem('', 'Russian Coleslaw Salad'),
  ];

  beverage1 = [
    new MenuItem('', 'Aerated Drinks'),
    new MenuItem('', 'Black Coffee'),
    new MenuItem('', 'Black Tea'),
    new MenuItem('', 'Bottled Water'),
	new MenuItem('', 'Butter Milk'),
	new MenuItem('', 'Cold Coffee'),
	new MenuItem('', 'Cold Coffee With Ice-cream'),
	new MenuItem('(Vanilla, Chocolate, Strawberry)', 'Flavoured Milkshake With Ice-cream'),
	new MenuItem('', "Fresh Juice")
  ];

  beverage2 = [
    new MenuItem('(Sweet/Salted)', 'Fresh Lime Soda'),
    new MenuItem('', 'Hot Coffee'),
    new MenuItem('(Sweet/Salted)', 'Lassi'),
    new MenuItem('', 'Masala Butter Milk'),
	new MenuItem('', 'Masala Tea'),
	new MenuItem('(Hot)', 'Milk'),
	new MenuItem('', 'Soft Drinks'),
	new MenuItem('', 'Tea')
  ];

  mocktail1 = [
    new MenuItem('(Lemon Juice, Crushed Ice, Soda, & Blue Curacao Syrup)', 'Blue Lagoon'),
    new MenuItem('', 'Faluda'),
    new MenuItem('', 'Fruit Punch'),
    new MenuItem('(Kiwi Crush, Crushed Ice, & Soda)', 'Kiwi Colada'),
	new MenuItem('(Lemon Juice & Litchi Crush)', 'Litchi Highwal'),
	new MenuItem('', 'Mint Mojito'),
	new MenuItem('(Pineapple, Soda, Rose syrup, Kiwi Crush, & Banana Topping)', 'Mint Summer Dreams'),
  ];

  mocktail2 = [
    new MenuItem('(Mixed Juices & Vanilla Ice-Cream)', 'Misty Fruit Punch'),
    new MenuItem('(Pineapple Juice, Coconut Milk, & Vanilla Ice-Cream)', 'Pina Colada'),
    new MenuItem('', 'Pink Cooler'),
    new MenuItem('(Pineapple, Lemon Juice, Sprite, & Cherry Topping)', 'Queens Punch'),
	new MenuItem('(Pineapple, Orange, Lime Juice, Sprite, & Vanilla Ice cream)', 'Shirley Temple'),
	new MenuItem('(Lemon Juice, Soda, Crushed Ice, & Kiwi Flavor)', 'Sunny Fizz'),
  ];

  starter1 = [
    new MenuItem('', 'Baby Corn Crunchy'),
	new MenuItem('', 'Bean Tacos'),
	new MenuItem('', 'Cheese balls'),
	new MenuItem('', 'Cheese Nachos'),
	new MenuItem('', 'Corn Paneer Rolls'),
	new MenuItem('', 'Corn Tacos'),
	new MenuItem('', 'Crispy Potatoes with Chilli'),
	new MenuItem('', 'Crispy Spinach Paneer'),
	new MenuItem('', 'Crispy Vegetable'),
    new MenuItem('', 'Dragon Roll'),
    new MenuItem('', 'French Fries')
  ];

  starter2 = [
    new MenuItem('', 'Harabhara Kabab'),
	new MenuItem('', 'Kabab Platter'),
	new MenuItem('', 'Khasta Paneer Tikka'),
	new MenuItem('', 'Mexican Tikki'),
	new MenuItem('', 'Mushroom Chilli Dry'),
	new MenuItem('(Dry)', 'Paneer Chilli'),
	new MenuItem('', 'Paneer Kalimari'),
	new MenuItem('', 'Paneer Malai Tikka'),
	new MenuItem('', 'Paneer Manchurian'),
    new MenuItem('(Dry)', 'Paneer Tikka'),
    new MenuItem('', 'Stuffed Tandoori Aloo'),
    new MenuItem('', 'Tandoori Gobi')
  ];

  starter3 = [
    new MenuItem('', 'Taquitos'),
	new MenuItem('', 'Thai Corn Filler'),
	new MenuItem('', 'Thai Spinach roll'),
	new MenuItem('', 'Veg. 65'),
	new MenuItem('', 'Veg. Akbari Seekh Kabab'),
	new MenuItem('', 'Veg. Golden Finger'),
	new MenuItem('', 'Veg. Lollipop'),
	new MenuItem('(Dry)', 'Veg. Manchurian'),
	new MenuItem('', 'Veg. Mili julti Kabab'),
    new MenuItem('', 'Veg. Spring Rolls'),
    new MenuItem('', 'Wanton Fry')
  ];

  soup1 = [
    new MenuItem('', 'Cream Of Broccoli'),
    new MenuItem('', 'Cream Of Tomato'),
    new MenuItem('', 'Dal-Mint Shorba'),
    new MenuItem('', 'French Onion'),
    new MenuItem('', 'Hot & Sour'),
    new MenuItem('', 'Hot Beans Corn Soup'),
    new MenuItem('', 'Lemon Tomato Coriander Shorba'),
    new MenuItem('', 'Minestrone'),
  ];

  soup2 = [
    new MenuItem('(Plain, Veg.)', 'Sweet Corn'),
    new MenuItem('', 'Tell Me In Italian'),
    new MenuItem('', 'Thai Wonder'),
    new MenuItem('', 'Tom Yum Thai'),
    new MenuItem('', 'Veg Manchow'),
    new MenuItem('', 'Veg. Clear'),
    new MenuItem('', 'Veg. Manchurian'),
    new MenuItem('', 'Wanton soup '),
  ];

  accompaniment1 = [
    new MenuItem('', 'Fried Papad'),
    new MenuItem('', 'Masala Papad'),
    new MenuItem('', 'Plain Curd'),
    new MenuItem('(Pineapple/Fruit)', 'Raita'),
    new MenuItem('(Veg./Boondi)', 'Raita'),
    new MenuItem('', 'Roasted Papad')
  ];

  dessert1 = [
    new MenuItem('(Strawberry/Vanilla/Chocolate)', 'Ice-Cream'),
  	new MenuItem('', "Jaddu's FF special"),
  	new MenuItem('', 'Sizzling Brownie'),
  	new MenuItem('(Almond Carnival/american Nuts/Cookies Cream)', 'Special Ice-Cream')
  ];

  constructor() { }

  ngOnInit() {}

}