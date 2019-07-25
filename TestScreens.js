describe('at_bus_oc_profile', () => {
    it('at_bus_oc_profile', () => {                   
        cy.setResolution([1680,1050]);
        cy.visit("https://www.google.com/");
                    
        cy.matchImageSnapshot('Testme');
        
                    
             
    });
        
});
     
