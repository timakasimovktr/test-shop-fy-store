{
    /* <div class="col-md-4">
        <div class="image_1"><img src="{{ block.settings.left_image | image_url: width: '300' }}" style="width:100%"></div>
    </div>
    <div class="col-md-4">
    	<div class="image_2"><img src="{{ block.settings.right_image | image_url: width: '300' }}" style="width:100%"></div>
    </div> 

    <div class="banner_section layout_padding">
        <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">


                {% for block in section.blocks %}

                <div class="carousel-item {% if forloop.first %} active {% endif %}">
                    <div class="container">
                        <div class="row border_1">
                            <div class="banner_img">
                                <div class="image_1"><img src="{{ block.settings.left_image | image_url: width: '1000' }}" style="width:100%"></div>
                            </div>
                            <div class="col-md-4 banner-text">
                                <h1 class="banner_taital">{{ block.settings.slide_text }}</h1>
                                <div class="buynow_bt active"><a href="#">Buy Now</a></div>
                                <div class="contact_bt"><a href="contact.html">Contact Us</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                
                {% endfor %}

                
            </div>
            <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
    </div>


    {% for product in collections['all'].products %}
                <div class="col-md-4">
                    <div class="box_man">
                        <h3 class="mobile_text">{{ product.title }}</h3>
                        <div class="mobile_img"><img src="{{ product | image_url: width: 400, height: 300 }}"></div>
                        <div class="cart_main">
                            <div class="cart_bt"><a href="#">Add To Cart</a></div>
                            <h4 class="samsung_text">Samsung</h4>
                            <h6 class="rate_text"><a href="#">{{ product.price }}</a></h6>
                            <h6 class="rate_text_1">{{ product.compare_at_price }}</h6>
                        </div>
                    </div>
                </div>
                {% endfor %}
    */
}