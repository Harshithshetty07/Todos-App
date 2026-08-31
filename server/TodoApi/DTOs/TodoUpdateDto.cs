namespace TodoApi.DTOs;

public class TodoUpdateDto
{
    public string Title { get; set; } = string.Empty;
    public bool IsComplete { get; set; }
}