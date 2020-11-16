# solution to "Stop gninnipS My sdroW!"
def spin_words(sentence):
    # "spin": input is split into a list of words
    # "output": output stream
    spin = sentence.split(" ")
    output = ""

    # add reversed word if length >= 5
    # otherwise add normal word
    for word in spin:
        if len(word) >= 5:
            output += word[::-1]
        else:
            output += word

        output += " "
    
    # return string with space ommited
    return output[:-1]