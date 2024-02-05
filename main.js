public static void ConvertMidiToText(string midiFilePath, string textFilePath)
{
    var midiFile = MidiFile.Read(midiFilePath);

    File.WriteAllLines(textFilePath,
                       midiFile.GetNotes()
                               .Select(n => $"{n.NoteNumber} {n.Time} {n.Length}"));
}
