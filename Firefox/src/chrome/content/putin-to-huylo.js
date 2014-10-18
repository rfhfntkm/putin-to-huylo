(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    
        v = v.replace(/\bPutin\b/g, "Huylo");
        v = v.replace(/\bputin\b/g, "huylo");

        v = v.replace(/\bPutina\b/g, "Huylo");
        v = v.replace(/\bputina\b/g, "huylo");

        v = v.replace(/Путина/g, "Хуйла");
        v = v.replace(/путина/g, "хуйла");
   
        v = v.replace(/Путину/g, "Хуйлу");
        v = v.replace(/путину/g, "хуйлу");
    
        v = v.replace(/Путиным/g, "Хуйлом");
        v = v.replace(/путиным/g, "хуйлом");

        v = v.replace(/Путине/g, "Хуйле");
        v = v.replace(/путине/g, "хуйле");

        v = v.replace(/Путины/g, "Хуйловы");
        v = v.replace(/путины/g, "хуйловы");

        v = v.replace(/Пу́тин/g, "Хуйло́");
        v = v.replace(/пу́тин/g, "хуйло́");

        v = v.replace(/Путин/g, "Хуйло");
        v = v.replace(/путин/g, "хуйло");
    
        v = v.replace(/Путіна/g, "Хуйла");
        v = v.replace(/путіна/g, "хуйла");
    
        v = v.replace(/Путіну/g, "Хуйлу");
        v = v.replace(/путіну/g, "хуйлу");

        v = v.replace(/Путіним/g, "Хуйлом");
        v = v.replace(/путіним/g, "хуйлом");

        v = v.replace(/Путіні/g, "Хуйлі");
        v = v.replace(/путіні/g, "хуйлі");
    
        v = v.replace(/Путіни/g, "Хуйлови");
        v = v.replace(/путіни/g, "хуйлови");
    
        v = v.replace(/Пу́тін/g, "Хуйло́")
        v = v.replace(/пу́тін/g, "хуйло́")
    
        v = v.replace(/Путін/g, "Хуйло");
        v = v.replace(/путін/g, "хуйло");    

        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
