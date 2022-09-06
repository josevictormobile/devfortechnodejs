using System; 

class URI {

    static void Main(string[] args) { 

        /**
         * Escreva a sua solução aqui
         * Code your solution here
         * Escriba su solución aquí
         */

    }

    public static decimal criaPi(decimal num){
    
        if(num!=3.14159265359){
            decimal seno = Math.Sin(num);
            return num+seno+criaPi(num+seno);
        }
        return num;
    }

     //if (!num.Equals(3.14159265359))
            //{
            //    decimal seno = (decimal)Math.Sin(Convert.ToDouble(num));
            //    string numero = Convert.ToString(num);
            //    return num + seno + criaPi(num + seno);
            //}
            //return num;

}