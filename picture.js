let symbol = [];
let figure = ["正方形", "三角形", "菱形"];
let fig_c;
let fig_f;
let fig_s;
let index = 0;

// 判断输入的字符是否合法
function symbol_input(c){
    let char = c;
    while(true){
        if(char && char != " "){
            symbol.push(char);
            char = prompt("请输入用来画图的符号。如果有多个请按确定添加；按取消继续");
        }
        else if(symbol.length != 0 && char != " "){
            break;
        }
        else{
            alert("输入的符号不正确");
            char = prompt("请输入用来画图的符号。如果有多个请按确定添加；按取消继续"); 
        }
    }
}

// 判断输入的图形是否合法
function figure_input(f){
    let input_figure = f;
    while(input_figure != "正方形" && input_figure != "三角形" && input_figure != "菱形"){
        alert("输入的图形不正确");
        input_figure = prompt("请输入图形：正方形，三角形，菱形");
    }
    return input_figure;
}

// 蓝缎输入的大小是否合法
function size_input(s){
    let input_size = ~~s;
    while(true){
        if(fig_f == "菱形" && input_size%2 == 0){
            alert("输入的大小不正确");
            input_size = prompt("请输入图形：正方形，三角形，菱形");
        }else{break;}
    }
    
    return input_size;
}

// 添加符号
function add_symbol(len){
    let result = "";
    for(let row = 0; row < len; row++){
        result += symbol[index] + "    ";
        index = (index + 1) % symbol.length;
    }
    result += "\n";
    return result;
}

// 画正方形
function square(){
    let result = "";
    for(let col = 0; col < fig_s; col++){
        result += add_symbol(fig_s);
    }
    confirm(result);
}

// 画三角形
function triangle(){
    let result = "";
    for(let col = 0; col < fig_s; col++){
        result += add_symbol(col + 1);
    }
    confirm(result);
}

// 画菱形
function diamond(){
    let index = 0;
    let result = "";
    let space = fig_s - 1;
    let num = 1;

    for(let up = 0; up < fig_s; up++){
        for(let i = 0; i < space; i++){   
           result += "   "; 
        }
        result += add_symbol(num);
        space -= 1;
        num += 1; 
    }

    space = 1;
    num = fig_s - 1;
    for(let down = 0; down < fig_s - 1; down++){
        for(let m = 0; m < space; m++){   
           result += "   "; 
        }
        result += add_symbol(num);
        space += 1;
        num -= 1;  
    }

    confirm(result);
}

fig_c = symbol_input(prompt("请输入用来画图的符号。如果有多个请按确定添加；按取消继续"));
fig_f = figure_input(prompt("请输入图形：正方形，三角形，菱形"));
fig_s = size_input(prompt("请输入大小，菱形必须是单数"));

if(fig_f == "正方形"){
    square();
}else if(fig_f == "三角形"){
    triangle();
}else{
    diamond();
}