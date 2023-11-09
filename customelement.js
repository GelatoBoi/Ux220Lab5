class AreebElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = "Areeb is here";
    }
}

customElements.define("x-areeb", AreebElement);