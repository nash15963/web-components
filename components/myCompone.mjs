class myComponet extends HTMLElement{
    constructor(){
        super() ;
        this.attachShadow({mode: 'open'}) ;
    }
}
// 我是範本
// component definition
window.customElements.define('my-compone', myComponet) ; 
