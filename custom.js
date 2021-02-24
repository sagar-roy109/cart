        function productHandle(isIncrease, price, item){
            
            let inputValue = document.getElementById(item +'-count').value;
            let inputValueMath = parseInt(inputValue);

            if( isIncrease == true){
                let inputValueFinal = inputValueMath + 1;
                document.getElementById(item +'-count').value = inputValueFinal;

                singleProductTotal(inputValueFinal, price, item);

                cartTotal();
       
        

            }else if ( isIncrease == false && inputValue > 1){
                let inputValueFinal = inputValueMath - 1;
                document.getElementById(item +'-count').value = inputValueFinal;
                singleProductTotal(inputValueFinal, price, item);
               
                cartTotal();
        
            }

        }

        function singleProductTotal(inputValueFinal , amount, item){
            
            let totalText = document.getElementById(item +'-total');
            let totalPrice = inputValueFinal * amount;
            totalText.innerText = '$' + totalPrice;


            
        }

        function cartTotal(){
        
            let firstItem = document.getElementById('phone-total').innerText;
            firstItem = firstItem.replace('$','');
            firstItemPrice = parseInt(firstItem);
        
    
      
            let secondItem = document.getElementById('case-total').innerText;
            secondItem = secondItem.replace('$', '');
            let secondItemPrice = parseInt(secondItem);

            let totalAmount = firstItemPrice + secondItemPrice ;

        
            document.getElementById('total-price').innerText = '$' + totalAmount;
            document.getElementById('grand-total').innerText = '$' + totalAmount;
        }

       

        // remove item

        let del = document.getElementsByClassName('remove-item');

        for (let i = 0; i < del.length; i++) {
            const removeItem = del[i];
        
        removeItem.addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.remove();
            
            if(del.length == 0 ){

                let h2 = document.createElement("h1");
                h2.innerHTML= "Your cart is empty"
                document.getElementById('cart').appendChild(h2);
                
            }
            
            
        })
            
        }
    
    