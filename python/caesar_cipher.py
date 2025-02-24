def shift_letter(letter, shift_amount):
    # assign a unicode value equal to sum of (unicode number of letter + shift amount) 
    unicode = ord(letter) + shift_amount
    
    # add 26 to unicode if it drops below the unicode value for 'a' or 'A' 
    if (letter == letter.lower() and unicode < 97) or (letter == letter.upper() and unicode < 65):
        unicode += 26
    # subtract 26 from unicode if it exceeds the unicode value for 'z' or 'Z' 
    elif (letter == letter.lower() and unicode > 122) or (letter == letter.upper() and unicode > 90):
        unicode -= 26
    
    # return the shifted letter
    return chr(unicode)
    

def caesar_cipher(string, shift_amount):
    result = ""
    
    # iterate through the string
    for i in string:
        # if the character is a letter, use the shift_letter function to add the appropriate letter to result
        if i.isalpha():
            result += shift_letter(i, shift_amount)
        # otherwise, just add the character as is to result
        else:
            result += i
    
    return result

print(caesar_cipher("Boy! What a string!", -5) == "Wjt! Rcvo v nomdib!")
print(caesar_cipher("Hello zach168! Yes here.", 5) == "Mjqqt efhm168! Djx mjwj.")
print(caesar_cipher("Hello Zach168! Yes here.", -5) == "Czggj Uvxc168! Tzn czmz.")