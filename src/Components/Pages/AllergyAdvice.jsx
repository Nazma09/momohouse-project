import star from "../../assets/images/star.png";
import QR1 from "../../assets/images/QR1.png";
import alergybluea from "../../assets/images/alergybluea.png";

const Allergy = () => {
  return (
    <div>
      <div className=" h-[120%] w-[100%]  flex justify-center gap-60 text-center items-center">
        <div className="text-left">
          <h1 className="text-3xl mb-4 font-lg italic text-green-900">
            About Us
          </h1>
          <h1 className="text-slate-500">WE PRIDE OURSELF ON</h1>
          <h1 className="text-3xl">
            <span className="text-orange-600">Our authentic momo recipes </span>{" "}
            <br />
            passed down through <br />
            generations
          </h1>
        </div>

        <div className=" h-[110%] ">
          <img src={star} alt="chef_girl_image" className="w-96 mt-5" />
        </div>
      </div>

      <div 
      
      className="bg-cover"
      style={{
        backgroundImage: `url("https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg")`,
        backgroundRepeat:"no-repeat"
      }}
      
      
      >
        <div className="flex flex-col justify-center border border-red-700 items-center mt-20">
          <h1 className="text-3xl text-black font-bold">
            <span className="text-orange-600">Ingridients</span> Used
          </h1>

          <div className="flex border-green-700 border-4 rounded-xl w-[40%] pl-10 mt-4">
            <div>
              <span
                
                className=" h-28   w-80 bg-contain  text-center text-3xl
                       bg-no-repeat   flex  items-center justify-center  text-white ml-2 "
              >
                <ul className=" list-disc">
                  <h1 className="text-black  font-medium text-2xl mb-4">
                    For The Dough
                  </h1>
                  <li>120 grams refined flour</li>
                  <li>1/2 tsp baking powder</li>
                  <li>1/2 tsp salt water (for kneading)</li>
                </ul>
              </span>
            </div>
          </div>

          <div className="flex border-green-700 border-4 rounded-xl w-[40%] pl-10 mt-4">
            <ul className=" list-disc">
              <h1 className="text-black  font-medium text-2xl mb-4">
                For The Chicking Filling :
              </h1>
              <li>1 cup chicken minced</li>
              <li>1/2 cup onions, finely chopped</li>
              <li>1/4 tsp black peeper powder</li>
              <li>1 tsp oil</li>
              <li>1/2 tsp garlic paste</li>
              <li>1/2 tsp soya sauce</li>
              <li>Salt</li>
              <li>1/4 tsp vinegar</li>
            </ul>
          </div>

          <div className="flex  border-green-700 border-4 rounded-xl w-[40%] pl-10 mt-4">
            <ul className=" list-disc">
              <h1 className="text-black  font-medium text-2xl mb-4">
                For The Vegeterian Filling :
              </h1>
              <li>1 cup cabbage and carrots, grated</li>
              <li>2 tbsp onions, finely chopped</li>
              <li>1/2 tsp garlic, finely chopped</li>
              <li>1 tsp oil</li>
              <li>1/4 tsp vinegar</li>
              <li>1/2 tsp soya sauce</li>
              <li>to taste salt</li>
              <li>to taste peeper</li>
              <li>1 tbsp cornflour</li>
            </ul>
          </div>
          <div className="flex  border-4 border-green-700 rounded-xl w-[40%] pl-10 mt-4">
            <ul className=" list-disc">
              <h1 className="text-black  font-medium text-2xl mb-4">
                For The Chilli Sauce :
              </h1>
              <li>25 gram garlic, pleeled</li>
              <li>6 gms whole red chillies</li>
              <li>3 tbsp vinegar</li>
              <li>1 tbsp oil</li>
              <li>to taste salt</li>
              <li>to taste chilly</li>
              <li>to taste sugar</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex ml-20 mt-20 items-center justify-center">
        <div>
          <h1 className="mb-10 items-center justify-center flex text-2xl font-bold ">
            {" "}
            <span className="text-orange-600">Allergy &nbsp;</span>
            Advice
          </h1>
          <p className="ml-10 items-center text-1xl text-black">
            Lorem ipsum dolor sit amet consectetur. Feugiat lectus sit est
            blandit in gravida. Nisl facilisis luctus sit porttitor placerat
            purus tincidunt. Cursus
            <br /> nascetur a mauris odio quis sociis pretium nisl. In viverra
            diam dis montes orci congue vulputate magna ullamcorper. Semper
            tellus ipsum felis <br />
            maecenas ultrices turpis amet euismod malesuada. Amet sed neque
            vitae malesuada quis sed urna.
            <br />
            <br />
            Feugiat orci feugiat cursus risus tincidunt. Aliquet nam iaculis
            bibendum tortor varius sit. Volutpat nunc nisl quisque elit. Ac est
            ultricies risus et sed. <br />
            Donec auctor tristique quam morbi pellentesque et. Scelerisque dui
            id arcu laoreet iaculis nunc et nulla sed. Aliquet nullam vulputate
            quis ut mi <br />
            placerat auctor. Ipsum massa suspendisse netus mollis interdum.
            <br />
            <br />
            Augue leo eget ut vitae maecenas ac. Metus massa nunc tristique
            donec dignissim aenean congue justo et. Parturient elit adipiscing
            non vitae mattis. <br />
            Congue senectus urna cursus nisi nisl nisl tincidunt rhoncus. Congue
            sit etiam vestibulum elit aenean leo enim volutpat. Aliquet vitae
            condimentum <br />
            bibendum ullamcorper vel cursus libero netus bibendum. Lorem id ut
            proin tincidunt. Nibh nunc amet odio est et. Sem dui nunc morbi leo
            quisque
            <br /> viverra ultrices. Mattis at tempus ultricies ut feugiat nunc
            dignissim. Urna turpis purus turpis elit risus.
            <br />
            <br />
            Sed elit ornare senectus dignissim diam dolor sed dictum. Faucibus
            mauris senectus odio blandit diam nunc. Urna volutpat ut potenti ut
            mus orci
            <br /> neque sem. Mattis amet at amet faucibus nisl morbi aenean ac.
            Justo turpis bibendum donec lacinia. Enim integer ornare nibh urna
            enim tortor arcu
            <br /> sit lacinia. Dapibus praesent vitae dolor cursus fringilla
            hac facilisis pellentesque. Elementum lacus varius et neque amet
            aliquam donec sed. Ultrices
            <br /> euismod commodo id vehicula commodo. Amet lorem eros nulla
            mauris. Sit arcu enim sit nunc mi sed aenean. Ornare enim vitae
            volutpat est dui
            <br /> tortor. Viverra habitant et consequat vitae elit aliquet
            iaculis in tristique.
            <br />
            <br />
            Quam ipsum viverra ac laoreet platea in praesent. Mattis molestie
            arcu nulla convallis interdum proin dui ut porta. Amet potenti
            praesent pulvinar
            <br /> scelerisque vitae habitant eget. Senectus hac id aliquam
            ipsum urna. Est ut amet nec sollicitudin nunc viverra nec ipsum
            suspendisse. Etiam risus
            <br /> ultricies dictum nisl. Bibendum ultrices elementum feugiat
            erat suspendisse mi fermentum magna suspendisse. Nisi mattis
            consequat nec donec eu
            <br /> amet nulla a. At blandit vulputate morbi tortor amet. Hac nec
            gravida tempor ac. Senectus nunc libero scelerisque quisque. Risus
            condimentum
            <br /> mattis massa integer.
          </p>
        </div>
      </div>
      <div className="flex ml-34 mt-20 items-center justify-center">
        <div>
          <h1 className="mb-4 ml-38 items-center justify-center flex  text-2xl font-bold  text-green-700">
            Scan the QR to pay
          </h1>
          <p className="text-gray-500 mb-6">
            You can also check the allergy advice using your phone as well
          </p>
          <img src={QR1} className="ml-36 " />
        </div>
      </div>
    </div>
  );
};

export default Allergy;
